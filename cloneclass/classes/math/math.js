function openAssignment(assignmentTitle) {
      var win = window.open("about:blank", "_blank");
      var url = "assignment.html";
      var doc = win.document;
      doc.body.style.margin = "0";
      doc.body.style.height = "100vh";
      var iframe = doc.createElement("iframe");
      iframe.style.border = "none";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.margin = "0";
      iframe.src = url;
      doc.body.appendChild(iframe);
    }

    var assignments = document.querySelectorAll('.assignment');
    for (var i = 0; i < assignments.length; i++) {
      assignments[i].onclick = function() {
        var title = this.querySelector('.assignment-title').textContent;
        openAssignment(title);
      };
    }
