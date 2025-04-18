/**

 * This Source Code Form is subject to the terms of the Mozilla 
 * Public License, v. 2.0 that can be found in the LICENSE file.
 */

import type { VideoClip } from "./video";
import type { Timestamp } from "../../models";

/**
 * Decorator for swapping the texture depending on the
 * current composition state/ environement
 */
export function textureSwap<T extends VideoClip> // @ts-ignore
  (target: T, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (this: T, ...args: [Timestamp]) {
    if (this.track?.composition?.rendering
      && this.sprite.texture.source.uid != this.textures.canvas.source.uid) {
      this.sprite.texture = this.textures.canvas;
    }

    if (!this.track?.composition?.rendering
      && this.sprite.texture.source.uid != this.textures.html5.source.uid) {
      this.sprite.texture = this.textures.html5;
    }

    return originalMethod.apply(this, args);
  };

  return descriptor;
}
