import ContactsFilterViewModel from "../viewmodel/ContactsFilterViewModel";

var Binder = new (function () {


    var store = {};
    var fmap = {};
    var rmap = {};
    var callbacks = {}


    this.viewReady = function (viewName) {



        if (viewName === "ContactsFilterContainerView") {

            var ref = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            store[ref] = {};
            fmap["ContactsFilterContainerView"] = ref;
            fmap["ContactsFilterViewModel"] = ref;
            var refs = [];
            refs.push("ContactsFilterContainerView");
            refs.push("ContactsFilterViewModel");
            rmap[ref] = refs;
            var contactsFilterViewModel = new ContactsFilterViewModel();

        }
    }

    this.onValueChange = function (classname, varname, callback) {
        console.log("In Binder onValueChange",":",classname, varname, callback)
        callbacks[classname] = callbacks[classname] || {};
        callbacks[classname][varname] = callback;
    };


    this.updateValue = function (classname, varname, varnewvalue) {
        console.log("In Binder updateValue",":",classname, varname, varnewvalue)
        var ref = fmap[classname];
        var varoldvalue = store[ref][varname];
        console.log("Old",JSON.stringify(varoldvalue))
        console.log("New",JSON.stringify(varnewvalue));
      //  if (JSON.stringify(varoldvalue)!==JSON.stringify(varnewvalue)) {
            console.log("In Binder updateValue",":","Setting new value",varnewvalue)
            store[ref][varname] = varnewvalue;
            rmap[ref].forEach(function (c) {
                if (c !== classname) {
                    console.log("In Binder updateValue forEach",":","varnewvalue",varnewvalue);
                    console.log("In Binder updateValue forEach","caller:",classname,"called",c,callbacks[c][varname]);
                    callbacks[c][varname].call("",varnewvalue);
                }
            });
        //}
    };

    // https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/
    var isEqual = function (value, other) {

        // Get the value type
        var type = Object.prototype.toString.call(value);

        // If the two objects are not the same type, return false
        if (type !== Object.prototype.toString.call(other)) return false;

        // If items are not an object or array, return false
        if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

        // Compare the length of the length of the two items
        var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
        var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
        if (valueLen !== otherLen) return false;

        // Compare two items
        var compare = function (item1, item2) {

            // Get the object type
            var itemType = Object.prototype.toString.call(item1);

            // If an object or array, compare recursively
            if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
                if (!isEqual(item1, item2)) return false;
            }

            // Otherwise, do a simple comparison
            else {

                // If the two items are not the same type, return false
                if (itemType !== Object.prototype.toString.call(item2)) return false;

                // Else if it's a function, convert to a string and compare
                // Otherwise, just compare
                if (itemType === '[object Function]') {
                    if (item1.toString() !== item2.toString()) return false;
                } else {
                    if (item1 !== item2) return false;
                }

            }
        };

        // Compare properties
        if (type === '[object Array]') {
            for (var i = 0; i < valueLen; i++) {
                if (compare(value[i], other[i]) === false) return false;
            }
        } else {
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    if (compare(value[key], other[key]) === false) return false;
                }
            }
        }

        // If nothing failed, return true
        return true;

    };


});

export default Binder;