var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AOI_Farms_data_1 = new ol.format.GeoJSON();
var features_AOI_Farms_data_1 = format_AOI_Farms_data_1.readFeatures(json_AOI_Farms_data_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOI_Farms_data_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOI_Farms_data_1.addFeatures(features_AOI_Farms_data_1);
var lyr_AOI_Farms_data_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOI_Farms_data_1, 
                style: style_AOI_Farms_data_1,
                popuplayertitle: "AOI_Farms_data",
                interactive: true,
    title: 'AOI_Farms_data<br />\
    <img src="styles/legend/AOI_Farms_data_1_0.png" /> Barley<br />\
    <img src="styles/legend/AOI_Farms_data_1_1.png" /> Chickpea<br />\
    <img src="styles/legend/AOI_Farms_data_1_2.png" /> Cumin<br />\
    <img src="styles/legend/AOI_Farms_data_1_3.png" /> Mustard<br />\
    <img src="styles/legend/AOI_Farms_data_1_4.png" /> Vegetables<br />\
    <img src="styles/legend/AOI_Farms_data_1_5.png" /> Wheat<br />\
    <img src="styles/legend/AOI_Farms_data_1_6.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_AOI_Farms_data_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_AOI_Farms_data_1];
lyr_AOI_Farms_data_1.set('fieldAliases', {'FID': 'FID', 'Country': 'Country', 'Area_Ha': 'Area_Ha', 'CropType23': 'CropType23', 'CropType22': 'CropType22', 'Yield23_KgPerHa': 'Yield23_KgPerHa', 'Yield22_KgPerHa': 'Yield22_KgPerHa', 'Tehsil': 'Tehsil', 'District': 'District', 'State': 'State', });
lyr_AOI_Farms_data_1.set('fieldImages', {'FID': 'Range', 'Country': 'TextEdit', 'Area_Ha': 'TextEdit', 'CropType23': 'TextEdit', 'CropType22': 'TextEdit', 'Yield23_KgPerHa': 'TextEdit', 'Yield22_KgPerHa': 'TextEdit', 'Tehsil': 'TextEdit', 'District': 'TextEdit', 'State': 'TextEdit', });
lyr_AOI_Farms_data_1.set('fieldLabels', {'FID': 'inline label - always visible', 'Country': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'CropType23': 'inline label - always visible', 'CropType22': 'inline label - always visible', 'Yield23_KgPerHa': 'inline label - visible with data', 'Yield22_KgPerHa': 'inline label - always visible', 'Tehsil': 'inline label - always visible', 'District': 'inline label - always visible', 'State': 'inline label - always visible', });
lyr_AOI_Farms_data_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});