/*
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

const Base64 = ((window) => {
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  const INVALID_CHARACTER_ERR = (() => {
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
