'use strict';

const lineReader = require('line-reader');

module.exports = function ( file ) {
    let newFileContent = '';
    let row = 0;

    return new Promise( ( resolve, reject ) => {
        lineReader.eachLine( file, { encoding: 'utf8' }, ( line, last ) => {
            ++row;

            if ( typeof line[ 0 ] !== 'undefined' && /\S/.test( line[ 0 ]) && line[ 0 ] != '' ) {
                if ( newFileContent == '' ) {
                    newFileContent = line;
                }
                else {
                    newFileContent += '\n';
                    newFileContent += `\n${ line }`;
                }
            }
            else {
                newFileContent += `\n${ line }`;
            }

            if ( last ) {
                resolve( newFileContent );
            }
        } );
    } );
};
