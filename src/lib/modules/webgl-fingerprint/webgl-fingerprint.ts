import { hashCode } from "src/lib/utils/util";

export const webGLFingerprint=()=> {
    try {
        // Create a WebGL context
        const canvas = document.createElement('canvas');
        const gl:any = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

        // Check for WebGL support
        if (!gl) {
            return 'WebGL not supported';
        }

        // Get WebGL rendering information
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

        // Generate a fingerprint based on WebGL rendering information
        const fingerprint = hashCode(vendor + renderer);

        return fingerprint;
    } catch (error) {
        console.error('Error generating WebGL fingerprint:', error);
        return 'WebGL not supported';
    }
}