// data files are sourced from https://github.com/va3c/json
// All files created during the Hackathon are included - for hysterical purposes - even though some do not load as anticipated

	var V3VJ = {} || V3VJ;

	V3VJ.basepath = '../../../json/';

	V3VJ.addVa3cJsonTab = function() {
		var tab = V3.librariesTab.appendChild( document.createElement( 'div' ) );
		tab.innerHTML =
			'<a id=tabVa3cJson title="Hi Mostapha!" ><p class=buttonLibrary >' +
				'<i class="fa fa-file-image-o"></i> vA3C JSON...' +
			'</p></a>';
		tabVa3cJson.onclick = function() { V3VJ.updateVa3cJSONTab(); JA.toggleDialogs(V3VJ.Va3cJsonTab); };

		V3VJ.Va3cJsonTab = tab.appendChild( document.createElement( 'div' ) );
		V3VJ.Va3cJsonTab.style.cssText = 'cursor: auto; display: none; ' ;

	};

	V3VJ.updateVa3cJSONTab = function() {
		var fileList = '<br>';
		var file, boilerplate, fname;
		for ( var i = 0, len = V3VJ.files.length; i < len; i++ ) {
			file = V3VJ.files[ i ][0];
			scale = V3VJ.files[ i ][1];
			title = V3VJ.files[ i ][2] ? V3VJ.files[ i ][2] : '';
			fileList += 
				'<a href=JavaScript:JAFO.openUrl("' + V3VJ.basepath + file + '",' + scale + '); >[O]</a> ' +
				'<a href=JavaScript:' +
				'JAFO.appendUrl("' + V3VJ.basepath + file + '",' + scale + '); title="' + title + '" >' + file.split('/').pop() + '</a><br>';
		}

		V3VJ.Va3cJsonTab.innerHTML =
			'<p title="Data brought in from Revit and Grasshopper" >' +
				'The files below are sourced from the<br><a href="https://github.com/va3c/json" target="_blank">vA3C JSON repository</a>.<br><br>' +
				'These files were produced during the AEC Hackathon. Not all files load. ' +
				'Be careful: most files are Three.js scenes and overwrite the current scene.' +
			'</p>' +
			'<div >' + fileList + '</div>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleTab(V3VJ.Va3cJsonTab); ); >Close</a> ' +
			'</p>' +
		'';
	}

	V3VJ.files = [

		['DrCyanKlein.json', 0.005, 'Revit model' ],
//'DrCyanKlein.json', {'sclx':'0.01','scly':'0.01','sclz':'0.01} ],

		['DrMajentaKlein.json', 0.01, 'Revit model'],
		['Hex_01.js', 0.0075, 'Grasshopper model' ],
		['MissSpacyEyes.json',0.03, 'Grasshopper model' ],
		['TTX.json', 0.02, 'Grasshopper model' ],
		['TypTower.json', 0.02, 'Grasshopper model' ],
//		['US_Capitol_Building.dae', 1, ''],
		['Vase_01.js', 0.02, 'Grasshopper model' ],
		['3dsmax/test_3dsmax.js', 0.01, '3D Studio model - broken'],
		['3dsmax/TransamericaPyramid2.js', 0.01, '3D Stdio model - broken' ],
		['aeron/hey-ron.js', 100, '3D Studio model' ],
		['archive/box-light.js', 1, 'Blender export - broken'],
		['archive/Project1.rvt.js', 0.01, 'Revit model - broken' ],
		['archive/Project2.rvt.js', 0.01, 'Revit model' ],
		['archive/sample.js', 1, 'Blender export - broken' ],
		['archive/scene.Monkey.js', 10, 'Blender export' ],
		['archive/test.js', 10, 'Blender export' ],
		['archive/Wall.rvt - Copy.js', 0.01, 'Revit model - broken' ],
		['archive/Wall.rvt.js', 0.01, 'Revit model - broken' ],
		['BH first working sample/jsonTester.json', 1, 'broken' ],
		['lounge/scrounge.js', 100, '3D Studio model'],
		['noguchi/no-gucci.js', 1000, '3D Studio model' ],
		['revit/Project1.rvt.js', 0.01, 'Revit model'],
		['revit/Project2.rvt.js', 0.01, 'Revit model' ],
		['revit/rac_basic_sample_project.rvt.js', 0.01, 'Revit model - 41 MB - takes a while to load, worth the wait' ],
		['revit/Wall.rvt.js', 0.01, 'Revit model' ],
		['revit/WallWindow.rvt.js', 0.01, 'Revit model' ]
	]