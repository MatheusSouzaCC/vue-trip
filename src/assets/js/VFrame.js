export default class VFrame {
  constructor(padding = 4, fadeIn = 'fadeIn', fadeOut = 'fadeOut') {
    this.padding = padding;
    this.fadeIn = fadeIn;
    this.fadeOut = fadeOut;
  }

  rectTopProperties(target) {
    const targetRect = target.getBoundingClientRect();

    const height = (targetRect.top - this.padding);
    const width = target.offsetWidth + (this.padding * 2);

    return {
      top: 0,
      left: targetRect.left - this.padding,
      height: (height < 0) ? 0 : height,
      width: (width < 0) ? 0 : width,
    };
  }

  rectRightProperties(target) {
    const targetRect = target.getBoundingClientRect();

    const height = window.innerHeight;
    const width = (window.innerWidth - targetRect.left) + (target.offsetWidth + this.padding);

    return {
      top: 0,
      left: (targetRect.left + target.offsetWidth) + this.padding,
      height: (height < 0) ? 0 : height,
      width: (width < 0) ? 0 : width,
    };
  }

  rectBottomProperties(target) {
    const targetRect = target.getBoundingClientRect();

    const height = (window.innerHeight - targetRect.top) + (target.offsetHeight + this.padding);
    const width = target.offsetWidth + (this.padding * 2);

    return {
      top: (targetRect.top + target.offsetHeight) + this.padding,
      left: targetRect.left - this.padding,
      height: (height < 0) ? 0 : height,
      width: (width < 0) ? 0 : width,
    };
  }

  rectLeftProperties(target) {
    const targetRect = target.getBoundingClientRect();

    const height = window.innerHeight;
    const width = targetRect.left - this.padding;

    return {
      top: 0,
      left: 0,
      height: (height < 0) ? 0 : height,
      width: (width < 0) ? 0 : width,
    };
  }

  mountDiv(id, top, left, height, width) {
    const el = document.createElement('div');

    el.innerHTML = '';

    el.style.setProperty('top', `${top}px`, 'important');
    el.style.setProperty('left', `${left}px`, 'important');
    el.style.setProperty('width', `${width}px`, 'important');
    el.style.setProperty('height', `${height}px`, 'important');

    el.setAttribute('id', id);
    el.classList.add('v-frame', 'animated', this.fadeIn);

    return el;
  }

  destroyDiv(id) {
    const el = document.getElementById(id);

    if (!el) {
      return null;
    }

    el.classList.remove(this.fadeIn);
    el.classList.add(this.fadeOut);

    el.innerHTML = '';

    return el;
  }

  appendFrame(id, rect) {
    document.body.appendChild(this.mountDiv(id, rect.top, rect.left, rect.height, rect.width));
  }

  removeFrame(id) {
    const el = this.destroyDiv(id);

    if (el) {
      setTimeout(() => {
        document.body.removeChild(el);
      }, 500);
    }
  }

  updateFrame(id, rect) {
    const el = document.getElementById(id);

    el.style.setProperty('top', `${rect.top}px`, 'important');
    el.style.setProperty('left', `${rect.left}px`, 'important');
    el.style.setProperty('width', `${rect.width}px`, 'important');
    el.style.setProperty('height', `${rect.height}px`, 'important');
  }

  create(target) {
    this.appendFrame('v-trip-frame-top', this.rectTopProperties(target));
    this.appendFrame('v-trip-frame-right', this.rectRightProperties(target));
    this.appendFrame('v-trip-frame-bottom', this.rectBottomProperties(target));
    this.appendFrame('v-trip-frame-left', this.rectLeftProperties(target));
  }

  recalculate(target) {
    this.updateFrame('v-trip-frame-top', this.rectTopProperties(target));
    this.updateFrame('v-trip-frame-right', this.rectRightProperties(target));
    this.updateFrame('v-trip-frame-bottom', this.rectBottomProperties(target));
    this.updateFrame('v-trip-frame-left', this.rectLeftProperties(target));
  }

  destroy() {
    this.removeFrame('v-trip-frame-top');
    this.removeFrame('v-trip-frame-right');
    this.removeFrame('v-trip-frame-bottom');
    this.removeFrame('v-trip-frame-left');
  }
}
