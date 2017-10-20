enum TypeToast {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
  PLAIN = "plain",
  CUSTOM = "custom"
}

class VanillaToast {

  private static FADE_MS = 400;
  private REMOVE_TIME_MS = 10000000;

  private parent: any;
  private duration;

  constructor(parent: any) {
    this.parent = parent;
    this.duration = this.REMOVE_TIME_MS;
  }

  public showSuccess(title: string, message: string): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, TypeToast.SUCCESS);
    let toast: HTMLElement = this.addToast(text);
    return toast;
  }

  public showInfo(title: string, message: string): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, TypeToast.INFO);
    let toast: HTMLElement = this.addToast(text);
    return toast;
  }

  public showWarning(title: string, message: string): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, TypeToast.WARNING);
    let toast: HTMLElement = this.addToast(text);
    return toast;
  }

  public showError(title: string, message: string): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, TypeToast.ERROR);
    let toast: HTMLElement = this.addToast(text);
    return toast;
  }

  public showPlain(title: string, message: string): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, TypeToast.PLAIN);
    let toast: HTMLElement = this.addToast(text);
    return toast;
  }

  public showCustom(title: string, message: string, iconUrl: string): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, TypeToast.CUSTOM, iconUrl);
    let toast: HTMLElement = this.addToast(text);
    return toast;
  }

  private getCustomToast(title: string, message: string, type: TypeToast, iconUrl?: string): HTMLElement {

    if (!title) title = " ";
    if (!message) message = " ";

    let icon = '<div class="dj-toast-icon"></div>';
    if (type == TypeToast.CUSTOM) {
      icon = '<div class="dj-toast-icon" style="background-image: url(' + iconUrl + ');"></div>';
    }

    let toast: any = document.createElement("div");
    toast.className = "dj-toast dj-toast-" + type;
    toast.style.display = "none";
    toast.insertAdjacentHTML("afterbegin",
      icon +
      '<div class="dj-toast-text">' +
      '<div class="dj-toast-title">' + title + '</div>' +
      '<div class="dj-toast-message">' + message + '</div></div>'
    );

    toast.fade = (type: string, ms: number, onEnd?: () => void) => {
      let self:any = toast;

      let isIn = type === 'in',
        opacity = isIn ? 0 : 1,
        interval = 10,
        duration = ms,
        gap = interval / duration;

      if(isIn) {
        self.style.display = 'block';
        self.style.opacity = opacity;
      }

      function func() {
        opacity = isIn ? opacity + gap : opacity - gap;
        self.style.opacity = opacity;

        if(opacity <= 0) self.style.display = 'none'
        if(opacity <= 0 || opacity >= 1) {
          window.clearInterval(fading);
          if (onEnd != null) onEnd();
        }
      }

      let fading = window.setInterval(func, interval);
    };

    toast.fadeIn = (ms: number, onEnd?: () => void) => {
      toast.fade("in", ms, onEnd);
    };

    toast.fadeOut = (ms: number, onEnd?: () => void) => {
      toast.fade("out", ms, onEnd);
    };

    return toast;
  }

  private addToast(toast: any): HTMLElement {

    let self = this;

    let container: any = this.getContainer();
    container.appendChild(toast);

    // Add close button
    let closeBtn: HTMLElement = document.createElement("div");
    closeBtn.className = "dj-toast-icon-close";
    toast.appendChild(closeBtn);

    closeBtn.addEventListener("pointerdown", function () {
      self.removeToast(toast);
    });

    setTimeout(function () {
      self.removeToast(toast)
    }, self.duration);

    toast.fadeIn(VanillaToast.FADE_MS); // TODO: Customize time out

    return toast;
  }

  private getContainer(): any {

    if (this.parent.getElementsByClassName("dj-toast-container").length == 0) {
      // Container doesn't exist
      this.parent.insertAdjacentHTML("afterbegin", "<div class=\"dj-toast-container\"></div>");
    }

    return this.parent.getElementsByClassName("dj-toast-container")[0];
  }

  private removeToast(toast: any) {

    toast.fadeOut(VanillaToast.FADE_MS, function () {
        toast.remove();
      }
    );
  }
}