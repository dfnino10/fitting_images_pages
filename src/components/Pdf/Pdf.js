import React from 'react';
import { Page, Document, StyleSheet, Image } from '@react-pdf/renderer';



// Create Document Component
const Pdf = ({orientation, imageSrc, imageHeight, imageWidth}) => {
    const display = orientation === 'vertical'? 'portrait': 'landscape'
    
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4',
            orientation: display
        },
        image: {
            height: imageHeight,
            width: imageWidth
        }      
    });

    return(
        <Document>
          <Page size="A4" style={styles.page} wrap={true}>
            <Image
                style={styles.image}
                src={imageSrc}
            />
          </Page>
        </Document>
      );
}

export default Pdf;