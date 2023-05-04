function marksheet() {
    var a = document.getElementById('name').value;
    var b = document.getElementById('totle').value;
    var c = document.getElementById('obtained').value;
    var percentage = c / b * 100;
    if (percentage >= 80 && percentage <= 100) {
        var grde = "A-One Grade"
        var rmrks = "Excellent"
        document.getElementById('nameshow').value = "Marksheet of " + a;
        document.getElementById('percentage').value = + percentage + "%";
        document.getElementById('Grade').value = grde;
        document.getElementById('Remarks').value = rmrks;
    }
    else if (percentage >= 70 && percentage < 80) {
        var grde = "A Grade"
        var rmrks = "V Good"
        document.getElementById('nameshow').value = "Marksheet of " + a;
        document.getElementById('percentage').value = + percentage + "%";
        document.getElementById('Grade').value = grde;
        document.getElementById('Remarks').value = rmrks;
    }
    else if (percentage >= 60 && percentage < 70) {
        var grde = "Grade B";
        var rmrks = "Good"
        document.getElementById('nameshow').value = "Marksheet of " + a;
        document.getElementById('percentage').value = percentage + "%";
        document.getElementById('Grade').value = grde;
        document.getElementById('Remarks').value = rmrks;
    }
    else {
        var grde = "Fail"
        var rmrks = "Better Luck Next Time"
        document.getElementById('nameshow').value = "Marksheet of " + a;
        document.getElementById('percentage').value = + percentage + "%";
        document.getElementById('Grade').value = grde;
        document.getElementById('Remarks').value = rmrks;
    }
}
