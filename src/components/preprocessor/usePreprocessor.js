
import { useMemo, useCallback } from "react";

export function usePreprocessor(code, setCode, editor) {
    const instruments = useMemo(() => {
        if (!code) return [];

        const regex = /([a-zA-Z0-9_]+)\s*:\s*([\s\S]*?)(?=\n[a-zA-Z0-9_]+\s*:|$)/g;
        const matches = [...code.matchAll(regex)];

        return matches.map(([_, name, block]) => {
            const paramRegex = /\.([a-zA-Z0-9_]+)\((.*?)\)/g;
            const params = {};
            let paramMatch;

            while ((paramMatch = paramRegex.exec(block)) !== null) {
                const key = paramMatch[1];
                const rawValue = paramMatch[2].trim();
                params[key] = rawValue;
            }

            return { name, block, params };
        });
    }, [code]);

    const updateInstrument = useCallback((instName, newParams) => {
        const regex = new RegExp(`(${instName}\\s*:\\s*)([\\s\\S]*?)(?=\\n[a-zA-Z0-9_]+\\s*:|$)`);
        const match = code.match(regex);
        if (!match) return;

        const [full, prefix, block] = match;

        let newBlock = block;
        Object.entries(newParams).forEach(([key, value]) => {
            const funcRegex = new RegExp(`\\.${key}\\((.*?)\\)`);
            newBlock = newBlock.replace(funcRegex, `.${key}(${value})`);
        });

        const updated = code.replace(full, `${prefix}${newBlock}`);
        setCode(updated);
    }, [code, setCode]);

    const muteInstrument = useCallback((instrName, checked ) => {

        const symbol = checked ? "" : "_";
        const variable = instrName;

        const regex = new RegExp(`^(_?${variable})(\\s*:?)`, "m");

        const newText = code.replace(regex, (_, name, colon) => {
            return `${symbol}${variable}${colon}`;
        });


        setCode(newText);
        editor?.evaluate();    
    },[editor, code, setCode])

    return { instruments, updateInstrument, muteInstrument };

}