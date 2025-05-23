/**

 * This Source Code Form is subject to the terms of the Mozilla 
 * Public License, v. 2.0 that can be found in the LICENSE file.
 */

import type { CaptionPresetType } from './preset.types';
import type { CaptionTrack } from './caption';

export interface CaptionPresetStrategy {
	/**
	 * Defines the type of strategy
	 */
	type: CaptionPresetType;
	/**
	 * This function applies the settings to the track
	 */
	applyTo(track: CaptionTrack): Promise<void>;
}
