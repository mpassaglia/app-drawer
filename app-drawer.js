(function ($) {
    $.fn.appDrawer = function (options) {
        var mouse_inside_app_drawer = false;
        var _target = this;

        var settings = $.extend({
            alignTo: 'left', //
            width: 400,
            launcher: '.app-drawer-launcher',
            drawerClass: '.app-drawer',
            closeDrawer: '#close-app-drawer > button',
            animateStyle: 'fade',
            animateDirection: 'down',
            mobile_size_max: 767,
            mobileAnimateStyle: 'slide',
            mobileAnimateDirection: 'right',
            navParent: '.navbar-collapse',
            closeButtonClassMobile: 'glyphicon-circle-arrow-left',
            closeButtonClassFull: 'glyphicon-remove',
            animationDuration: 350
        }, options);

        var alignAppDrawer = function () {
            if ($(window).innerWidth() > settings.mobile_size_max) {
                var leftOffset = 0;
                var outerWidth = 0;
                if (undefined === $(settings.launcher).offset()) {
                }
                else {
                    leftOffset = $(settings.launcher).offset().left;
                    outerWidth = $(settings.launcher).outerWidth();
                }

                var centerLeftVal = Math.max((leftOffset - _target.width()) + outerWidth, 0);

                _target.css(settings.alignTo, centerLeftVal);
                _target.css('width', settings.width);
            }
            else {
                _target.css(settings.alignTo, 'auto');
                _target.css('width', '100%');
            }
        }

        var toggleButtonClass = function (target, toRemove, toAdd) {
            if ($(target).hasClass(toRemove)) {
                $(target).removeClass(toRemove);
                $(target).addClass(toAdd);
            }
        }

        var configAppDrawer = function () {
            alignAppDrawer();

            if ($(window).innerWidth() > settings.mobile_size_max) {
                alignAppDrawer();
                toggleButtonClass(settings.closeDrawer + '> span', settings.closeButtonClassMobile, settings.closeButtonClassFull)
            }
            else {
                _target.css(settings.alignTo, 'auto');
                toggleButtonClass(settings.closeDrawer + '> span', settings.closeButtonClassFull, settings.closeButtonClassMobile)
            }
        }

        var toggleDisplayAppDrawer = function () {
            alignAppDrawer();

            if ($(window).innerWidth() > settings.mobile_size_max) {
                _target.slideToggle();
            }
            else {
                if (_target.is(':visible')) {
                    _target.animate({width: 0}, settings.animationDuration, '',
                        function () {
                            _target.toggle()
                        });
                }
                else {
                    _target.width(0).toggle().animate({width: '100%'}, settings.animationDuration);
                }

                $(settings.navParent).collapse('toggle');
            }
        }

        // Allow user to click out of menu to close it.
        var updateAppDrawerMouseStatus = function (val) {
            mouse_inside_app_drawer = val;
        }
        var trackAppDrawerHover = function (target, statusFunc) {
            $(target).hover(function () {
                statusFunc(true);
            }, function () {
                statusFunc(false);
            });
        }
        trackAppDrawerHover(settings.drawerClass, updateAppDrawerMouseStatus);

        $(window).mouseup(function () {
            if (!mouse_inside_app_drawer &&
                    _target.is(':visible')) {
                toggleDisplayAppDrawer();
            }
        });
        //

        // Change UI based on screen size
        $(function () {
            configAppDrawer();
        });

        $(window).resize(function () {
            configAppDrawer();
        });
        //

        // App Drawer display functionality
        $(settings.closeDrawer).click(function () {
            toggleDisplayAppDrawer();
        });

        $(settings.launcher).click(function () {
            toggleDisplayAppDrawer();
        });
        //

        return _target;
    }

})(jQuery);