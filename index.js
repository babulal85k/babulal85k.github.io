function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    // Replace 'C:\\Users\\babul\\Downloads\\BabuLalMandal-cap01_001.pdf' with the actual path to your resume PDF file
    var pdfPath = 'https://drive.google.com/file/d/1Ev1pBOXirv8C62E-49ECXm4KfPI12D_6/view?usp=sharing';

    // Create an anchor element
    var link = document.createElement('a');

    // Set the href attribute to the path of the PDF file
    link.href = pdfPath;

    // Set the download attribute with the desired file name
    link.download = 'BabuLalMandal-cap01_001.pdf';

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the body
    document.body.removeChild(link);
});

function viewResume() {
    // Replace 'https://drive.google.com/file/d/1Ev1pBOXirv8C62E-49ECXm4KfPI12D_6/view?usp=sharing' with your Google Drive PDF link
    var pdfDriveLink = 'https://drive.google.com/file/d/1Ev1pBOXirv8C62E-49ECXm4KfPI12D_6/view?usp=sharing';

    // Extract the file ID from the Google Drive link
    var fileId = pdfDriveLink.match(/\/d\/(.+?)\//)[1];

    // Create an embed element
    var embed = document.createElement('embed');

    // Set the src attribute to the direct download link
    embed.src = 'https://drive.google.com/uc?id=' + fileId;

    // Set attributes for the inbuilt PDF viewer
    embed.type = 'application/pdf';
    embed.width = '100%';
    embed.height = '600px'; // You can adjust the height accordingly

    // Append the embed element to the body
    document.body.appendChild(embed);
}