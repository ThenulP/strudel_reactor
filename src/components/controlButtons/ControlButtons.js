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
export default function ControlButtons({ editor, preprocess }) {

    return (
        //<div className="d-flex flex-column gap-2">
        //    <div className="d-flex gap-2">
        //        <button onClick={onProcess} className="btn btn-outline-primary flex-fill">
        //            Preprocess
        //        </button>
        //        <button onClick={onProcAndPlay} className="btn btn-outline-primary flex-fill">
        //            Proc & Play
        //        </button>
        //    </div>
        //    <div className="d-flex gap-2">
        //        <button onClick={onPlay} className="btn btn-outline-success flex-fill">
        //            Play
        //        </button>
        //        <button onClick={onStop} className="btn btn-outline-danger flex-fill">
        //            Stop
        //        </button>
        //    </div>
        //    <div className="d-flex gap-2">
        //        <button onClick={onSave} className="btn btn-outline-secondary flex-fill">
        //            Save Preprocess
        //        </button>
        //        <button onClick={onLoad} className="btn btn-outline-secondary flex-fill">
        //            Load Preprocess
        //        </button>


        //    </div>
        //</div>

        <div className="d-flex flex-column gap-2">
            <div className="d-flex gap-2">
                <PreprocessBtn preprocess={preprocess} />
                <ProcAndPlayBtn editor={editor} preprocess={preprocess} />
            </div>
            <div className="d-flex gap-2">
                <PlayBtn editor={editor} />
                <StopBtn editor={editor} />
            </div>
            <div className="d-flex gap-2">
                <SaveFileBtn preprocess={preprocess} />
                <LoadFileBtn preprocess={preprocess} />
            </div>
        </div>
    );
}