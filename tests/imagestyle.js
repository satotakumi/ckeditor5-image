/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import ClassicTestEditor from '@ckeditor/ckeditor5-core/tests/_utils/classictesteditor';
import ImageStyle from '../src/imagestyle';
import ImageStyleEditing from '../src/imagestyle/imagestyleediting';
import ImageStyleUI from '../src/imagestyle/imagestyleui';
import global from '@ckeditor/ckeditor5-utils/src/dom/global';

describe( 'ImageStyle', () => {
	let editor;

	beforeEach( () => {
		const editorElement = global.document.createElement( 'div' );
		global.document.body.appendChild( editorElement );

		return ClassicTestEditor
			.create( editorElement, {
				plugins: [ ImageStyle ]
			} )
			.then( newEditor => {
				editor = newEditor;
			} );
	} );

	afterEach( () => {
		return editor.destroy();
	} );

	it( 'should be loaded', () => {
		expect( editor.plugins.get( ImageStyle ) ).to.be.instanceOf( ImageStyle );
	} );

	it( 'should load ImageStyleEditing plugin', () => {
		expect( editor.plugins.get( ImageStyleEditing ) ).to.be.instanceOf( ImageStyleEditing );
	} );

	it( 'should load ImageStyleUI plugin', () => {
		expect( editor.plugins.get( ImageStyleUI ) ).to.be.instanceOf( ImageStyleUI );
	} );
} );
