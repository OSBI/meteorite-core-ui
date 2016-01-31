const Base64 = ((window) => {
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let INVALID_CHARACTER_ERR = (() => {
    // Fabricate a suitable error object
    try {
      document.createElement('$');
    }
    catch (error) {
      return error;
    }
  }());

  // Encoder
  window.Base64 || (
    window.Base64 = {
      encode: (string) => {
        let len = string.length;
        let max = Math.max;
        let result = '';
        let i = 0;
        let a, b, b1, b2, b3, b4, c;

        while (i < len) {
          a = string.charCodeAt(i++) || 0;
          b = string.charCodeAt(i++) || 0;
          c = string.charCodeAt(i++) || 0;

          if (max(a, b, c) > 0xFF) {
            throw INVALID_CHARACTER_ERR;
          }

          b1 = (a >> 2) & 0x3F;
          b2 = ((a & 0x3) << 4) | ((b >> 4) & 0xF);
          b3 = ((b & 0xF) << 2) | ((c >> 6) & 0x3);
          b4 = c & 0x3F;

          if (!b) {
            b3 = b4 = 64;
          }
          else if (!c) {
            b4 = 64;
          }
          result += characters.charAt(b1) + characters.charAt(b2) +
            characters.charAt(b3) + characters.charAt(b4);
        }

        return result;
      }
    }
  );
}(window));

export default Base64;
