/** The Drupal namespace. */
Drupal.media = Drupal.media || {};
(function($, media) {

  /**
   * @class Base class used to provide the display and options for any component
   * deriving from this class.  Components who derive are expected to provide
   * the elements that they define by implementing the getElements method.
   *
   * @extends media.plugin
   * @param {object} context The jQuery context this component resides.
   * @param {object} options The options for this component.
   */
  media.display = function(context, options) {

    if (context) {

      // Set the display and options.
      this.display = $(context);
      this.options = options;

      // Extend all display elements.
      this.options.elements = this.options.elements || {};
      $.extend(this.options.elements, this.getElements());
      this.elements = this.options.elements;
    }

    // Derive from plugin
    media.plugin.call(this, context, options);
  };

  // Define the prototype for all controllers.
  media.display.prototype = new media.plugin();
  media.display.prototype.constructor = media.display;

  /**
   * Returns all the jQuery elements that this component uses.
   *
   * @return {object} An object which defines all the jQuery elements that
   * this component uses.
   */
  media.display.prototype.getElements = function() {
    return {};
  };

  /**
   * Returns if this component is valid and exists within the DOM.
   *
   * @return {boolean} TRUE if the plugin display is valid.
   */
  media.display.prototype.isValid = function() {
    return (this.display.length > 0);
  };
}(jQuery, Drupal.media));
