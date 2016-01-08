function LoadData(target, url) {
    var number = 1 + Math.floor(Math.random() * 1000000);
    url = url + '?rand=' + number;
    LoadAjaxURL(target, url);
}

function LoadAjaxURL(target, url) {
    $.ajax({
        beforeSend: startAnimation(target),
        url: url,
        error: function (jqXHR, textStatus, errorThrown) {
            //alert("An Error Occured : " + errorThrown + jqXHR.responseText);
            alert("An Error Occured : Please contact system administrator for more details");
        },
        cache: 'false',
        success: function (result) { $(target).html(result); },
        complete: stopAnimation(target)
    });
}

function startAnimation(target) {
    //..add a loading image on top of the target
}

function stopAnimation(target) {
    // remove the animation gif or stop the spinning, etc.
}

function onAjaxEditComplete(content) {
    var number = 1 + Math.floor(Math.random() * 1000000);
    jsonResult = $.parseJSON(content.responseText);
    if (jsonResult.Success) {
        LoadAjaxURL('#profile_results', jsonResult.Url + '&rand=' + number);
    }
    if (!jsonResult.Success) {
        $('#mp_tr').show();
        var sBaseCntnt = "<span id='mp_errmsg'><img src='/Images/warning.gif' border='0'>The following error(s) occurs: ";
        $('#mp_errmsg').html(sBaseCntnt + "<ul>" + jsonResult.Message + "</ul></span>");
    }
}

function onUpdateProfilePicSuccess() {
    var number = 1 + Math.floor(Math.random() * 1000000);
    var Url = 'MyProfile/PersonalView?updatestat=2'
    LoadAjaxURL('#profile_results', Url + '&rand=' + number);
}

function textCounter(field, countfield, maxlimit) {
    if (field.value.length > maxlimit) {
        field.value = field.value.substring(0, maxlimit);
        alert('Textarea value can only be ' + maxlimit + ' characters in length.');
        return false;
    }
    else {
        countfield.value = maxlimit - field.value.length;
    }
}