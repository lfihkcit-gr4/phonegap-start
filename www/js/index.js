/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};

// XML PARSER cf. http://www.w3schools.com/xml/tryit.asp?filename=tryxml_display_table
function xmlparser()
{
        var xmlhttp, xml_data, items, content;
        xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET", "http://www.fis.edu.hk/web/WebsiteFeeds.aspx?f=0&lang=fr-fr", true);
        //xmlhttp.open("GET", "xmlfile.xml", true);
        xmlhttp.overrideMimeType('text/xml; charset=iso-8859-1');
        xmlhttp.onreadystatechange=function()
        {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                        xml_data = xmlhttp.responseXML;
                        items = xml_data.getElementsByTagName("item");
                        
                        content = '';
                        for (i=0;i<items.length;i++)
                                { 
                                content = content + '<h1 class="title">' + items[i].getElementsByTagName("title")[0].textContent + '</h1><p class="description">' + items[i].getElementsByTagName("description")[0].textContent + '</p>';
                                }
                        
                        document.getElementById('content').innerHTML=content;
                }
        }
        xmlhttp.send();
};
