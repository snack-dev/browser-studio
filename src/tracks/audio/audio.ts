/**

 * This Source Code Form is subject to the terms of the Mozilla 
 * Public License, v. 2.0 that can be found in the LICENSE file.
 */

import type { AudioClip } from '../../clips';
import { MediaTrack } from '../media';

export class AudioTrack extends MediaTrack<AudioClip> {
	public readonly type = 'audio';
}
