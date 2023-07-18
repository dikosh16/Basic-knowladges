var list = document.getElementById("list");
        var selectedElement = null;

        function selectFirst() {
            clearSelection();
            selectedElement = list.firstElementChild;
            selectElement(selectedElement);
        }

        function selectLast() {
            clearSelection();
            selectedElement = list.lastElementChild;
            selectElement(selectedElement);
        }

        function selectNext() {
            if (selectedElement && selectedElement.nextElementSibling) {
                clearSelection();
                selectedElement = selectedElement.nextElementSibling;
                selectElement(selectedElement);
            }
        }

        function selectPrevious() {
            if (selectedElement && selectedElement.previousElementSibling) {
                clearSelection();
                selectedElement = selectedElement.previousElementSibling;
                selectElement(selectedElement);
            }
        }

        function addElement() {
            var newItem = document.createElement("li");
            newItem.textContent = "Новий елемент";
            list.appendChild(newItem);
        }

        function deleteElement() {
            if (selectedElement) {
                list.removeChild(selectedElement);
                selectedElement = null;
            }
        }

        function addToStart() {
            var newItem = document.createElement("li");
            newItem.textContent = "Новий елемент";
            list.insertBefore(newItem, list.firstElementChild);
        }

        function clearSelection() {
            if (selectedElement) {
                selectedElement.classList.remove("selected");
            }
        }

        function selectElement(element) {
            element.classList.add("selected");
        }