var TypeToast;
(function (TypeToast) {
    TypeToast[TypeToast["INFO"] = 0] = "INFO";
    TypeToast[TypeToast["WARNING"] = 1] = "WARNING";
    TypeToast[TypeToast["ERROR"] = 2] = "ERROR";
})(TypeToast || (TypeToast = {}));
var VanillaToast = (function () {
    function VanillaToast(parent) {
        this.REMOVE_TIME_MS = 2000;
        this.parent = parent;
        this.duration = this.REMOVE_TIME_MS;
    }
    VanillaToast.prototype.showSuccess = function (title, message) {
        var text = this.getCustomToast(title, message, "success");
        var toast = this.addToast(text);
    };
    VanillaToast.prototype.showInfo = function (title, message) {
        var text = this.getCustomToast(title, message, "info");
        var toast = this.addToast(text);
    };
    VanillaToast.prototype.showWarning = function (title, message) {
        var text = this.getCustomToast(title, message, "warning");
        var toast = this.addToast(text);
    };
    VanillaToast.prototype.showError = function (title, message) {
        var text = this.getCustomToast(title, message, "error");
        var toast = this.addToast(text);
    };
    VanillaToast.prototype.showPlain = function (title, message) {
        var text = this.getCustomToast(title, message, "plain");
        var toast = this.addToast(text);
    };
    VanillaToast.prototype.showCustom = function (title, message, iconUrl) {
        var text = this.getCustomToast(title, message, "error");
        var toast = this.addToast(text);
    };
    VanillaToast.prototype.getCustomToast = function (title, message, type) {
        if (!title)
            title = " ";
        if (!message)
            message = " ";
        var text = '<div class="dj-toast"><div class="dj-toast-icon-' + type + '"></div>' +
            '<div class="dj-toast-text"><div class="dj-toast-title">' +
            title + '</div><div class="dj-toast-message">' +
            message + '</div></div></div>';
        return text;
    };
    VanillaToast.prototype.addToast = function (toastHtml) {
        var self = this;
        var container = $(this.getContainer());
        var toast = $(toastHtml);
        toast.hide();
        toast.appendTo(container);
        var closeBtn = $('<div class="dj-toast-icon-close"></div>');
        closeBtn.appendTo(toast);
        closeBtn.on("pointerdown", function () {
            self.removeToast(toast);
        });
        setTimeout(function () {
            self.removeToast(toast);
        }, self.duration);
        toast.fadeIn(VanillaToast.FADE_MS);
        return toast;
    };
    VanillaToast.prototype.getContainer = function () {
        if (this.parent.getElementsByClassName("dj-toast-container").length == 0) {
            this.parent.insertAdjacentHTML("afterbegin", "<div class=\"dj-toast-container\"></div>");
        }
        return this.parent.getElementsByClassName("dj-toast-container")[0];
    };
    VanillaToast.prototype.removeToast = function (toast) {
        toast.fadeOut(VanillaToast.FADE_MS, function () {
            toast.remove();
        });
    };
    VanillaToast.FADE_MS = 400;
    return VanillaToast;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvVmFuaWxsYVRvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUssU0FJSjtBQUpELFdBQUssU0FBUztJQUNaLHlDQUFJLENBQUE7SUFDSiwrQ0FBTyxDQUFBO0lBQ1AsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFKSSxTQUFTLEtBQVQsU0FBUyxRQUliO0FBRUQ7SUFRRSxzQkFBWSxNQUFXO1FBTGYsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFNNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxrQ0FBVyxHQUFsQixVQUFtQixLQUFhLEVBQUUsT0FBZTtRQUMvQyxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEUsSUFBSSxLQUFLLEdBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sK0JBQVEsR0FBZixVQUFnQixLQUFhLEVBQUUsT0FBZTtRQUM1QyxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxLQUFLLEdBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sa0NBQVcsR0FBbEIsVUFBbUIsS0FBYSxFQUFFLE9BQWU7UUFDL0MsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksS0FBSyxHQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLGdDQUFTLEdBQWhCLFVBQWlCLEtBQWEsRUFB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QUFFO1lBQ2hDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFoR2Msb0JBQU8sR0FBRyxHQUFHLENBQUM7SUFpRy9CLG1CQUFDO0NBbkdELEFBbUdDLElBQUEiLCJmaWxlIjoic2NyaXB0cy9WYW5pbGxhVG9hc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJlbnVtIFR5cGVUb2FzdCB7XG4gIElORk8sXG4gIFdBUk5JTkcsXG4gIEVSUk9SXG59XG5cbmNsYXNzIFZhbmlsbGFUb2FzdCB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgRkFERV9NUyA9IDQwMDtcbiAgcHJpdmF0ZSBSRU1PVkVfVElNRV9NUyA9IDIwMDA7XG5cbiAgcHJpdmF0ZSBwYXJlbnQ6IGFueTtcbiAgcHJpdmF0ZSBkdXJhdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IGFueSkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLlJFTU9WRV9USU1FX01TO1xuICB9XG5cbiAgcHVibGljIHNob3dTdWNjZXNzKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSB0aGlzLmdldEN1c3RvbVRvYXN0KHRpdGxlLCBtZXNzYWdlLCBcInN1Y2Nlc3NcIik7XG4gICAgbGV0IHRvYXN0OiBhbnkgPSB0aGlzLmFkZFRvYXN0KHRleHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dJbmZvKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSB0aGlzLmdldEN1c3RvbVRvYXN0KHRpdGxlLCBtZXNzYWdlLCBcImluZm9cIik7XG4gICAgbGV0IHRvYXN0OiBhbnkgPSB0aGlzLmFkZFRvYXN0KHRleHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dXYXJuaW5nKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSB0aGlzLmdldEN1c3RvbVRvYXN0KHRpdGxlLCBtZXNzYWdlLCBcIndhcm5pbmdcIik7XG4gICAgbGV0IHRvYXN0OiBhbnkgPSB0aGlzLmFkZFRvYXN0KHRleHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dFcnJvcih0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBsZXQgdGV4dDogc3RyaW5nID0gdGhpcy5nZXRDdXN0b21Ub2FzdCh0aXRsZSwgbWVzc2FnZSwgXCJlcnJvclwiKTtcbiAgICBsZXQgdG9hc3Q6IGFueSA9IHRoaXMuYWRkVG9hc3QodGV4dCk7XG4gIH1cblxuICBwdWJsaWMgc2hvd1BsYWluKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgbGV0IHRleHQ6IHN0cmluZyA9IHRoaXMuZ2V0Q3VzdG9tVG9hc3QodGl0bGUsIG1lc3NhZ2UsIFwicGxhaW5cIik7XG4gICAgICBsZXQgdG9hc3Q6IGFueSA9IHRoaXMuYWRkVG9hc3QodGV4dCk7XG4gIH1cblxuICBwdWJsaWMgc2hvd0N1c3RvbSh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGljb25Vcmw6IHN0cmluZykge1xuICAgIC8vIFRPRE86IEFkZFxuICAgICAgbGV0IHRleHQ6IHN0cmluZyA9IHRoaXMuZ2V0Q3VzdG9tVG9hc3QodGl0bGUsIG1lc3NhZ2UsIFwiZXJyb3JcIik7XG4gICAgICBsZXQgdG9hc3Q6IGFueSA9IHRoaXMuYWRkVG9hc3QodGV4dCk7XG4gIH1cblxuICBwcml2YXRlIGdldEN1c3RvbVRvYXN0KHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgdHlwZTogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgIGlmICghdGl0bGUpIHRpdGxlID0gXCIgXCI7XG4gICAgaWYgKCFtZXNzYWdlKSBtZXNzYWdlID0gXCIgXCI7XG5cbiAgICBsZXQgdGV4dDogc3RyaW5nID1cbiAgICAgICc8ZGl2IGNsYXNzPVwiZGotdG9hc3RcIj48ZGl2IGNsYXNzPVwiZGotdG9hc3QtaWNvbi0nICsgdHlwZSArICdcIj48L2Rpdj4nICtcbiAgICAgICc8ZGl2IGNsYXNzPVwiZGotdG9hc3QtdGV4dFwiPjxkaXYgY2xhc3M9XCJkai10b2FzdC10aXRsZVwiPicgK1xuICAgICAgdGl0bGUgKyAnPC9kaXY+PGRpdiBjbGFzcz1cImRqLXRvYXN0LW1lc3NhZ2VcIj4nICtcbiAgICAgIG1lc3NhZ2UgKyAnPC9kaXY+PC9kaXY+PC9kaXY+JztcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgYWRkVG9hc3QodG9hc3RIdG1sOiBzdHJpbmcpOiBhbnkge1xuXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IGNvbnRhaW5lcjogYW55ID0gJCh0aGlzLmdldENvbnRhaW5lcigpKTtcbiAgICBsZXQgdG9hc3Q6IGFueSA9ICQodG9hc3RIdG1sKTtcbiAgICB0b2FzdC5oaWRlKCk7XG4gICAgdG9hc3QuYXBwZW5kVG8oY29udGFpbmVyKTtcblxuICAgIC8vIEFkZCBjbG9zZSBidXR0b25cbiAgICBsZXQgY2xvc2VCdG46IGFueSA9ICQoJzxkaXYgY2xhc3M9XCJkai10b2FzdC1pY29uLWNsb3NlXCI+PC9kaXY+Jyk7XG4gICAgY2xvc2VCdG4uYXBwZW5kVG8odG9hc3QpO1xuXG4gICAgY2xvc2VCdG4ub24oXCJwb2ludGVyZG93blwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnJlbW92ZVRvYXN0KHRvYXN0KVxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5yZW1vdmVUb2FzdCh0b2FzdClcbiAgICB9LCBzZWxmLmR1cmF0aW9uKTtcblxuICAgIHRvYXN0LmZhZGVJbihWYW5pbGxhVG9hc3QuRkFERV9NUyk7XG5cbiAgICByZXR1cm4gdG9hc3Q7XG4gIH1cblxuICBwcml2YXRlIGdldENvbnRhaW5lcigpOiBhbnkge1xuXG4gICAgaWYgKHRoaXMucGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkai10b2FzdC1jb250YWluZXJcIikubGVuZ3RoID09IDApIHtcbiAgICAgIC8vIENvbnRhaW5lciBkb2Vzbid0IGV4aXN0XG4gICAgICB0aGlzLnBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIFwiPGRpdiBjbGFzcz1cXFwiZGotdG9hc3QtY29udGFpbmVyXFxcIj48L2Rpdj5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkai10b2FzdC1jb250YWluZXJcIilbMF07XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVRvYXN0KHRvYXN0OiBhbnkpIHtcblxuICAgIHRvYXN0LmZhZGVPdXQoVmFuaWxsYVRvYXN0LkZBREVfTVMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG9hc3QucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19
