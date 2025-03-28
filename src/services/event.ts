/**

 * This Source Code Form is subject to the terms of the Mozilla 
 * Public License, v. 2.0 that can be found in the LICENSE file.
 */

import { EventEmitterMixin } from "../mixins";

export function EventEmitter<Events = {}>() {
  return class extends EventEmitterMixin<Events>(class { }) { }
}
