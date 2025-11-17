import  PlayBtn  from "./PlayBtn";
import  StopBtn  from "./StopBtn";
import  PreprocessBtn  from "./PreprocessBtn";
import  ProcAndPlayBtn  from "./ProcAndPlayBtn";
import  LoadFileBtn  from "./LoadFileBtn";
import SaveFileBtn from "./SaveFileBtn";

console.log('PlayBtn:', PlayBtn);
console.log('StopBtn:', StopBtn);
console.log('PreprocessBtn:', PreprocessBtn);
console.log('ProcAndPlayBtn:', ProcAndPlayBtn);
console.log('LoadFileBtn:', LoadFileBtn);
console.log('SaveFileBtn:', SaveFileBtn);
export default function ControlButtons({ editor, code, setCode }) {

    return (


        <div className="d-flex flex-column gap-2">
            <div className="d-flex gap-2">
                <PreprocessBtn code={code} setCode={setCode} />
                <ProcAndPlayBtn code={code} setCode={setCode} />
            </div>
            <div className="d-flex gap-2">
                <PlayBtn editor={editor} />
                <StopBtn editor={editor} />
            </div>
            <div className="d-flex gap-2">
                <SaveFileBtn code={code} />
                <LoadFileBtn setCode={setCode} />
            </div>
        </div>
    );
}