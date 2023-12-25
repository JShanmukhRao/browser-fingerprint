
// color gambat, isHdr, color depth, fonts,inverted color, screen, graphic card

import { canvasFingerprint  }  from "./modules/canvas-fingerprint/canvas-fingerprint";
import { webGLFingerprint } from "./modules/webgl-fingerprint/webgl-fingerprint";
import { isEqual } from "./utils/util";

export const browserFingerprint = async () => {
    const canvasFingerprintResult = canvasFingerprint()
    const canvasFingerprintResult2 =  canvasFingerprint();
    const canvasFingerprintResult3 =  canvasFingerprint();

    const isValidCanvasFingerprint = isEqual(canvasFingerprintResult, canvasFingerprintResult2, canvasFingerprintResult3);

    const webglFingerprintResult = await webGLFingerprint();
    const webglFingerprintResult2 = await webGLFingerprint();
    const webglFingerprintResult3 = await webGLFingerprint();
    const isValidWebglFingerprint = isEqual(webglFingerprintResult, webglFingerprintResult2, webglFingerprintResult3);

    // fetch timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    

}
