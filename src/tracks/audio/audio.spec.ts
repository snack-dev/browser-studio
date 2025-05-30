/**

 * This Source Code Form is subject to the terms of the Mozilla 
 * Public License, v. 2.0 that can be found in the LICENSE file.
 */

import { describe, expect, it } from 'vitest';
import { AudioTrack } from './audio';

describe('The Audio Track Object', () => {
	it('should have a certain intitial state', () => {
		const track = new AudioTrack();
		expect(track.type).toBe('audio');
	});
});
