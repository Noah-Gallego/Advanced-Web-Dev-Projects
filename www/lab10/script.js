"use strict";

function makeAjaxCall(data, successCallback, errorCallBack) {
    $.ajax({
        url: "https://paul.cs3680.com/labs/api",
        type: "POST",
        data: data,
        contentType: "application/json",
        success: successCallback,
        error: errorCallBack
    });
}

const getRequest = function(method, params, id) {
    return {
        method: method,
        params: params,
        id: id,
        jsonrpc: "2.0"
    }
}

$('#callHello').click(function() {
    const name = $("#name").val();
    const helloId = $("#helloResponse"); 
    const request = getRequest("hello", { name: name }, helloId);
    const error = $("#error");

    makeAjaxCall(
        JSON.stringify(request),
        function(response) {
            helloId.text(response.result.toUpperCase());
        },
        function(xhr, ajaxOptions, thrownError) {
            error.remove("hidden");
            error.text(`${thrownError} ${xhr.status}`);
        }
    );
});

$("#callAdd").click(function() {
    const value1 = Number($("#value1").val());
    const value2 = Number($("#value2").val());
    const addId = $("#addResponse"); 
    const request = getRequest("add", { value1: value1, value2: value2 }, addId);

    makeAjaxCall(
        JSON.stringify(request),
        function(response) {
            $("#addResponse").text(response.result);
        }
    );
});

$("#callGiphy").click(function() {
    const key = $("#keyword").val();
    const img = $("#giphyResponse"); 
    const request = getRequest("giphy", { keyword: key }, img);

    makeAjaxCall(
        JSON.stringify(request), function(response) {
            console.log(response.result)
            img.attr("src", response.result);
        }
    );
});
