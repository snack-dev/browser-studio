/**

 * This Source Code Form is subject to the terms of the Mozilla 
 * Public License, v. 2.0 that can be found in the LICENSE file.
 */

export type InitMessageData = {
	type: 'init';
	file: File;
	range: [number, number];
	fps: number;
};
