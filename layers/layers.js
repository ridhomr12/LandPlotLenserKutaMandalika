var wms_layers = [];


        var lyr_SsateliteGoogle_0 = new ol.layer.Tile({
            'title': 'Ssatelite Google',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_LENSER_3_BIDANG_1 = new ol.format.GeoJSON();
var features_LENSER_3_BIDANG_1 = format_LENSER_3_BIDANG_1.readFeatures(json_LENSER_3_BIDANG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LENSER_3_BIDANG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LENSER_3_BIDANG_1.addFeatures(features_LENSER_3_BIDANG_1);
var lyr_LENSER_3_BIDANG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LENSER_3_BIDANG_1, 
                style: style_LENSER_3_BIDANG_1,
                popuplayertitle: "LENSER_3_BIDANG",
                interactive: true,
                title: '<img src="styles/legend/LENSER_3_BIDANG_1.png" /> LENSER_3_BIDANG'
            });

lyr_SsateliteGoogle_0.setVisible(true);lyr_LENSER_3_BIDANG_1.setVisible(true);
var layersList = [lyr_SsateliteGoogle_0,lyr_LENSER_3_BIDANG_1];
lyr_LENSER_3_BIDANG_1.set('fieldAliases', {'LAYER': 'LAYER', 'STRING': 'STRING', 'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'LINKS_QTY': 'LINKS_QTY', 'Luas': 'Luas', });
lyr_LENSER_3_BIDANG_1.set('fieldImages', {'LAYER': 'TextEdit', 'STRING': 'TextEdit', 'ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'LINKS_QTY': 'TextEdit', 'Luas': 'TextEdit', });
lyr_LENSER_3_BIDANG_1.set('fieldLabels', {'LAYER': 'no label', 'STRING': 'no label', 'ID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'LINKS_QTY': 'no label', 'Luas': 'inline label - always visible', });
lyr_LENSER_3_BIDANG_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});