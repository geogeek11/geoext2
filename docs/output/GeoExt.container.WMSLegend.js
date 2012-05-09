Ext.data.JsonP.GeoExt_container_WMSLegend({"parentMixins":[],"inheritdoc":null,"extends":"GeoExt.container.LayerLegend","alternateClassNames":["GeoExt.WMSLegend"],"requires":["GeoExt.legend.Image"],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":false,"uses":[],"members":{"cfg":[{"owner":"GeoExt.container.WMSLegend","tagname":"cfg","meta":{},"name":"baseParams","id":"cfg-baseParams"},{"owner":"GeoExt.container.WMSLegend","tagname":"cfg","meta":{},"name":"defaultStyleIsFirst","id":"cfg-defaultStyleIsFirst"},{"owner":"GeoExt.container.LayerLegend","tagname":"cfg","meta":{},"name":"labelCls","id":"cfg-labelCls"},{"owner":"GeoExt.container.LayerLegend","tagname":"cfg","meta":{},"name":"layerRecord","id":"cfg-layerRecord"},{"owner":"GeoExt.container.LayerLegend","tagname":"cfg","meta":{},"name":"legendTitle","id":"cfg-legendTitle"},{"owner":"GeoExt.container.LayerLegend","tagname":"cfg","meta":{},"name":"showTitle","id":"cfg-showTitle"},{"owner":"GeoExt.container.LayerLegend","tagname":"cfg","meta":{},"name":"types","id":"cfg-types"},{"owner":"GeoExt.container.WMSLegend","tagname":"cfg","meta":{},"name":"useScaleParameter","id":"cfg-useScaleParameter"}],"method":[{"owner":"GeoExt.container.LayerLegend","tagname":"method","meta":{"private":true},"name":"getLabel","id":"method-getLabel"},{"owner":"GeoExt.container.LayerLegend","tagname":"method","meta":{"private":true},"name":"getLayerTitle","id":"method-getLayerTitle"},{"owner":"GeoExt.container.WMSLegend","tagname":"method","meta":{"private":true},"name":"getLegendUrl","id":"method-getLegendUrl"},{"owner":"GeoExt.container.LayerLegend","tagname":"method","meta":{},"name":"getTypes","id":"method-getTypes"},{"owner":"GeoExt.container.WMSLegend","tagname":"method","meta":{"private":true},"name":"onLayerMoveend","id":"method-onLayerMoveend"},{"owner":"GeoExt.container.LayerLegend","tagname":"method","meta":{"private":true},"name":"onStoreAdd","id":"method-onStoreAdd"},{"owner":"GeoExt.container.LayerLegend","tagname":"method","meta":{"private":true},"name":"onStoreRemove","id":"method-onStoreRemove"},{"owner":"GeoExt.container.LayerLegend","tagname":"method","meta":{"private":true},"name":"onStoreUpdate","id":"method-onStoreUpdate"},{"owner":"GeoExt.container.LayerLegend","tagname":"method","meta":{},"name":"supports","id":"method-supports"},{"owner":"GeoExt.container.WMSLegend","tagname":"method","meta":{"private":true},"name":"update","id":"method-update"}],"property":[{"owner":"GeoExt.container.LayerLegend","tagname":"property","meta":{"private":true},"name":"layerStore","id":"property-layerStore"}],"css_var":[],"event":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.WMSLegend</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.container.Container<div class='subclass '><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='docClass'>GeoExt.container.LayerLegend</a><div class='subclass '><strong>GeoExt.container.WMSLegend</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.legend.Image' rel='GeoExt.legend.Image' class='docClass'>GeoExt.legend.Image</a></div><h4>Files</h4><div class='dependency'><a href='source/WMSLegend.html#GeoExt-container-WMSLegend' target='_blank'>WMSLegend.js</a></div></pre><div class='doc-contents'><p>Show a legend image for a WMS layer. The image can be read from the styles\n field of a layer record (if the record comes e.g. from a\n <a href=\"#!/api/GeoExt.data.reader.WmsCapabilities\" rel=\"GeoExt.data.reader.WmsCapabilities\" class=\"docClass\">GeoExt.data.WMSCapabilitiesReader</a>). If not provided, a\n GetLegendGraphic request will be issued to retrieve the image.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-baseParams' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.container.WMSLegend'>GeoExt.container.WMSLegend</span><br/><a href='source/WMSLegend.html#GeoExt-container-WMSLegend-cfg-baseParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.WMSLegend-cfg-baseParams' class='name expandable'>baseParams</a><span> : Object</span></div><div class='description'><div class='short'>Optional parameters to add to the legend url, this can e.g. ...</div><div class='long'><p>Optional parameters to add to the legend url, this can e.g. be used to\nsupport vendor-specific parameters in a SLD WMS GetLegendGraphic\nrequest. To override the default MIME type of image/gif use the\nFORMAT parameter in baseParams.</p>\n\n<p>@example  <br/>\nvar legendPanel = new <a href=\"#!/api/GeoExt.panel.Legend\" rel=\"GeoExt.panel.Legend\" class=\"docClass\">GeoExt.LegendPanel</a>({</p>\n\n<pre><code>map: map,\ntitle: 'Legend Panel',\ndefaults: {\n    style: 'padding:5px',\n    baseParams: {\n        FORMAT: 'image/png',\n        LEGEND_OPTIONS: 'forceLabels:on'\n    }\n}\n</code></pre>\n\n<p>});</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-defaultStyleIsFirst' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.container.WMSLegend'>GeoExt.container.WMSLegend</span><br/><a href='source/WMSLegend.html#GeoExt-container-WMSLegend-cfg-defaultStyleIsFirst' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.WMSLegend-cfg-defaultStyleIsFirst' class='name expandable'>defaultStyleIsFirst</a><span> : Boolean</span></div><div class='description'><div class='short'>The WMS spec does not say if the first style advertised for a layer in\na Capabilities document is the default style t...</div><div class='long'><p>The WMS spec does not say if the first style advertised for a layer in\na Capabilities document is the default style that the layer is\nrendered with. We make this assumption by default. To be strictly WMS\ncompliant, set this to false, but make sure to configure a STYLES\nparam with your WMS layers, otherwise LegendURLs advertised in the\nGetCapabilities document cannot be used.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-labelCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-cfg-labelCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-cfg-labelCls' class='name expandable'>labelCls</a><span> : String</span></div><div class='description'><div class='short'>Optional css class to use for the layer title labels. ...</div><div class='long'><p>Optional css class to use for the layer title labels.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-layerRecord' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-cfg-layerRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-cfg-layerRecord' class='name expandable'>layerRecord</a><span> : <a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a></span></div><div class='description'><div class='short'>The layer record for the legend ...</div><div class='long'><p>The layer record for the legend</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-legendTitle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-cfg-legendTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-cfg-legendTitle' class='name expandable'>legendTitle</a><span> : String</span></div><div class='description'><div class='short'>Optional title to be displayed instead of the layer title. ...</div><div class='long'><p>Optional title to be displayed instead of the layer title.  If this is\nset, the value of <code>showTitle</code> will be ignored (assumed to be true).</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-showTitle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-cfg-showTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-cfg-showTitle' class='name expandable'>showTitle</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether or not to show the title of a layer. ...</div><div class='long'><p>Whether or not to show the title of a layer. This can be overridden\non the LayerStore record using the hideTitle property.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-types' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-cfg-types' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-cfg-types' class='name expandable'>types</a><span> : Array</span></div><div class='description'><div class='short'>An object containing a name-class mapping of LayerLegend subclasses. ...</div><div class='long'><p>An object containing a name-class mapping of LayerLegend subclasses.\nTo register as LayerLegend, a subclass should add itself to this object:</p>\n\n<p>GeoExt.GetLegendGraphicLegend = Ext.extend(<a href=\"#!/api/GeoExt.legend.Layer\" rel=\"GeoExt.legend.Layer\" class=\"docClass\">GeoExt.LayerLegend</a>, {\n});</p>\n\n<p><a href=\"#!/api/GeoExt.legend.Layer-cfg-types\" rel=\"GeoExt.legend.Layer-cfg-types\" class=\"docClass\">GeoExt.LayerLegend.types</a>[\"getlegendgraphic\"] =</p>\n\n<pre><code>GeoExt.GetLegendGraphicLegend;\n</code></pre>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='cfg-useScaleParameter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.container.WMSLegend'>GeoExt.container.WMSLegend</span><br/><a href='source/WMSLegend.html#GeoExt-container-WMSLegend-cfg-useScaleParameter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.WMSLegend-cfg-useScaleParameter' class='name expandable'>useScaleParameter</a><span> : Boolean</span></div><div class='description'><div class='short'>Should we use the optional SCALE parameter in the SLD WMS\nGetLegendGraphic request? Defaults to true. ...</div><div class='long'><p>Should we use the optional SCALE parameter in the SLD WMS\nGetLegendGraphic request? Defaults to true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-layerStore' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-property-layerStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-property-layerStore' class='name expandable'>layerStore</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>{GeoExt.data.LayerStore} ...</div><div class='long'><p>{<a href=\"#!/api/GeoExt.data.LayerStore\" rel=\"GeoExt.data.LayerStore\" class=\"docClass\">GeoExt.data.LayerStore</a>}</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getLabel' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-method-getLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-method-getLabel' class='name expandable'>getLabel</a>( <span class='pre'></span> ) : String<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Get the label text of the legend. ...</div><div class='long'><p>Get the label text of the legend.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLayerTitle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-method-getLayerTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-method-getLayerTitle' class='name expandable'>getLayerTitle</a>( <span class='pre'><a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a> record</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Get a title for the layer. ...</div><div class='long'><p>Get a title for the layer.  If the record doesn't have a title, use the\nname.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : <a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLegendUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.container.WMSLegend'>GeoExt.container.WMSLegend</span><br/><a href='source/WMSLegend.html#GeoExt-container-WMSLegend-method-getLegendUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.WMSLegend-method-getLegendUrl' class='name expandable'>getLegendUrl</a>( <span class='pre'>String layerName, Array layerNames</span> ) : String<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Get the legend URL of a sublayer. ...</div><div class='long'><p>Get the legend URL of a sublayer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerName</span> : String<div class='sub-desc'><p>A sublayer.</p>\n</div></li><li><span class='pre'>layerNames</span> : Array<div class='sub-desc'><p>The array of sublayers,\nread from this.layerRecord if not provided.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The legend URL.</p>\n</div></li></ul></div></div></div><div id='method-getTypes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-method-getTypes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-method-getTypes' class='name expandable'>getTypes</a>( <span class='pre'><a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a> layerRecord, Array preferredTypes</span> ) : Array</div><div class='description'><div class='short'>Gets an array of legend xtypes that support the provided layer record,\nwith optionally provided preferred types liste...</div><div class='long'><p>Gets an array of legend xtypes that support the provided layer record,\nwith optionally provided preferred types listed first.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerRecord</span> : <a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a><div class='sub-desc'><p>A layer record to get\nlegend types for. If not provided, all registered types will be\nreturned.</p>\n</div></li><li><span class='pre'>preferredTypes</span> : Array<div class='sub-desc'><p>Types that should be considered.\nfirst. If not provided, all registered legend types will be returned\nin the order of their score for support of the provided layerRecord.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>xtypes of legend types that can be used with\nthe provided layerRecord.</p>\n</div></li></ul></div></div></div><div id='method-onLayerMoveend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.container.WMSLegend'>GeoExt.container.WMSLegend</span><br/><a href='source/WMSLegend.html#GeoExt-container-WMSLegend-method-onLayerMoveend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.WMSLegend-method-onLayerMoveend' class='name expandable'>onLayerMoveend</a>( <span class='pre'>Object e</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onStoreAdd' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-method-onStoreAdd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-method-onStoreAdd' class='name expandable'>onStoreAdd</a>( <span class='pre'>Ext.data.Store store, Ext.data.Record record, Integer index</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for add event of the layerStore ...</div><div class='long'><p>Handler for add event of the layerStore</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The store to which the record was\nadded.</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>The record object corresponding\nto the added layer.</p>\n</div></li><li><span class='pre'>index</span> : Integer<div class='sub-desc'><p>The index in the store at which the record\nwas added.</p>\n</div></li></ul></div></div></div><div id='method-onStoreRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-method-onStoreRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-method-onStoreRemove' class='name expandable'>onStoreRemove</a>( <span class='pre'>Ext.data.Store store, Ext.data.Record record, Integer index</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for remove event of the layerStore ...</div><div class='long'><p>Handler for remove event of the layerStore</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The store from which the record was\nremoved.</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>The record object corresponding\nto the removed layer.</p>\n</div></li><li><span class='pre'>index</span> : Integer<div class='sub-desc'><p>The index in the store at which the record\nwas remvoed.</p>\n</div></li></ul></div></div></div><div id='method-onStoreUpdate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-method-onStoreUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-method-onStoreUpdate' class='name expandable'>onStoreUpdate</a>( <span class='pre'>Ext.data.Store store, Ext.data.Record record, String operation</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Update a the legend. ...</div><div class='long'><p>Update a the legend. Gets called when the store fires the update event.\nThis usually means the visibility of the layer, its style or title\nhas changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The store in which the record was\nchanged.</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>The record object corresponding\nto the updated layer.</p>\n</div></li><li><span class='pre'>operation</span> : String<div class='sub-desc'><p>The type of operation.</p>\n</div></li></ul></div></div></div><div id='method-supports' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='defined-in docClass'>GeoExt.container.LayerLegend</a><br/><a href='source/LayerLegend.html#GeoExt-container-LayerLegend-method-supports' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.LayerLegend-method-supports' class='name expandable'>supports</a>( <span class='pre'><a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a> layerRecord</span> ) : Integer</div><div class='description'><div class='short'>Checks whether this legend type supports the provided layerRecord. ...</div><div class='long'><p>Checks whether this legend type supports the provided layerRecord.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerRecord</span> : <a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a><div class='sub-desc'><p>The layer record\nto check support for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Integer</span><div class='sub-desc'><p>score indicating how good the legend supports the\nprovided record. 0 means not supported.</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.container.WMSLegend'>GeoExt.container.WMSLegend</span><br/><a href='source/WMSLegend.html#GeoExt-container-WMSLegend-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.container.WMSLegend-method-update' class='name expandable'>update</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Update the legend, adding, removing or updating\nthe per-sublayer box component. ...</div><div class='long'><p>Update the legend, adding, removing or updating\nthe per-sublayer box component.</p>\n<p>Overrides: <a href='#!/api/GeoExt.container.LayerLegend-method-update' rel='GeoExt.container.LayerLegend-method-update' class='docClass'>GeoExt.container.LayerLegend.update</a></p></div></div></div></div></div></div></div>","subclasses":[],"meta":{},"html_meta":{},"name":"GeoExt.container.WMSLegend","files":[{"href":"WMSLegend.html#GeoExt-container-WMSLegend","filename":"WMSLegend.js"}],"mixedInto":[],"aliases":{"widget":["gx_wmslegend"]},"id":"class-GeoExt.container.WMSLegend","superclasses":["Ext.container.Container","GeoExt.container.LayerLegend"]});