import { FrontEndManifest } from "../manifests/FrontEndManifest";
import { CraneMove } from "../moves/CraneMove";

export type Solution = {
    solved: boolean;
    moves?: Array<CraneMove>;
    final_manifest?: FrontEndManifest;
}