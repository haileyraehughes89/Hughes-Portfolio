import React from 'react';
import { Document, Page } from 'react-pdf';

const GoogleDrivePdfViewer = ({ pdfUrl }) => {
  const downloadLink = `${pdfUrl.replace('/view', '/preview')}&export=download`;

  return (
    <div>
      {/* PDF Viewer */}
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>

      {/* Download Link */}
      <div style={{ marginTop: '10px' }}>
        <a href={downloadLink} download>
          Download PDF
        </a>
      </div>
    </div>
  );
};

const App = () => {
  const pdfUrl = 'https://drive.google.com/file/d/1kvM_KqwLlpFmPCiZt-csMpfc8IMvM8iH/view?usp=sharing'; // Replace with your Google Drive PDF URL

  return (
    <div>
      <h1>Google Drive PDF Viewer</h1>
      <GoogleDrivePdfViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default App;
