import ViewManifest from "../ViewButton/viewManifest";
import ViewLog from "../ViewButton/viewLog";
import { FrontEndContainer } from "../../../types/APISolution";
import API from "../../../utils/API";
import PopupRemider from "../PopupReminder/popupReminder";

import "./CraniumToolbar.css";

interface Props {
  manifest: FrontEndContainer[];
  manifestName: string;
  updateScreenState: () => void;
  updatePrevScreenState: () => void;
  goToSignIn: () => void;
  fromLoadScreen?: boolean;
  onloads?: FrontEndContainer[];
  offloads?: FrontEndContainer[];
  isFinished?: () => boolean;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setManifestName: React.Dispatch<React.SetStateAction<string>>;
  setManifest: React.Dispatch<React.SetStateAction<FrontEndContainer[]>>;
  setBuffer: React.Dispatch<React.SetStateAction<FrontEndContainer[]>>;
}

export default function CraniumToolbar(props: Props) {
  const {
    manifest,
    manifestName,
    updateScreenState,
    updatePrevScreenState,
    goToSignIn,
    fromLoadScreen,
    onloads,
    offloads,
    isFinished,
    setCurrentStep,
    setManifestName,
    setManifest,
    setBuffer,
  } = props;

  updatePrevScreenState();
  const height = "50px";
  const width = "100px";

  const finishFunctions = () => {
    setCurrentStep(0);
    setManifestName("");
    setManifest([]);
    setBuffer([]);
    updateScreenState();
  };

  return (
    <div className="toolbar">
      <div>
        <ViewManifest manifest={manifest} manifestName={manifestName} />
        <ViewLog />
      </div>
      <div>
        {fromLoadScreen ? (
          <button
            className="finishCraniumToolbarButton"
            style={{ fontFamily: "work sans" }}
            onClick={() => {
              if (onloads && offloads) {
                console.log("sending transfer job...");
                API.sendJob("TRANSFER", manifest, onloads, offloads);
              }
              updateScreenState();
            }}
          >
            Finish
          </button>
        ) : (
          <PopupRemider
            func={finishFunctions}
            isFinished={isFinished ?? (() => true)}
          />
        )}
        <button
          className="returnToSignInButton"
          onClick={goToSignIn}
          style={{ fontFamily: "work sans" }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}