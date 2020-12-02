let COLS = [];
        let prefr = 0;
        let FRR = 0;
         function Comparator(a, b) {
            if (a[1] < b[1]) return -1;
            if (a[1] > b[1]) return 1;
            return 0;
        }

        function refreshTable() {
            let tbody = document.getElementById('principal-table-body');
            let totalCol = document.createElement('tr');
            let total = 0;
            let extranose = -0.001;
            COCOLS = COLS;
            tbody.innerHTML = '';
            for(let j = 0; j < COLS.length; j++){
                total = total + COLS[j][0]
            }
            for(let i = 0; i < COLS.length; i++){
                let fa = 0;
                let fr = parseFloat((COLS[i][0] / total).toFixed(3));
                console.log(typeof(fr))
                try {
                    fa = COCOLS[i-1][2] + COLS[i][0]
                    COCOLS[i].push(fa)
                } catch(e){
                    fa = COLS[i][0];
                    COCOLS[i].push(fa)
                }
                
                if(prefr == 0){
                    console.log(fr)
                    prefr = fr;
                    FRR = fr;
                } else {
                    FRR = prefr + fr;
                    prefr = FRR;
                    console.log(FRR)
                }
                extranose = extranose + 0.001
                console.log(prefr)
                console.log(FRR)
                if(i + 1 >= COLS.length){
                    FRR = 1
                } else {
                        FRR = parseFloat(`0.${`${(FRR - 1 - i).toFixed(3)}`.split(".")[1]}`)
                }
                let newCol = document.createElement('tr');
                newCol.innerHTML = `
                    <td style="overflow: hidden;" class='input-table border border-gray-200 px-4 py-2'>${COLS[i][1]}</td>
                    <td style="overflow: hidden;" class='input-table border border-gray-200 px-4 py-2'>${COLS[i][0]}</td>
                    <td style="overflow: hidden;" class='input-table border border-gray-200 px-4 py-2'>${fr}</td>
                    <td style="overflow: hidden;" class='input-table border border-gray-200 px-4 py-2'>${fa}</td>
                    <td style="overflow: hidden;" class='input-table border border-gray-200 px-4 py-2'>${FRR.toFixed(3)}</td>
                    <td style="overflow: hidden;" style="text-align:center;" class='input-table border border-gray-200 px-4 py-2'>${((COLS[i][0] / total).toFixed(3) * 100).toFixed(2)}</td>
                `;
                tbody.appendChild(newCol);
            }
            totalCol.innerHTML = `
                <td class='input-table px-4 py-2 border border-gray-200'>Total:</td>
                <td class='input-table px-4 py-2 border border-gray-200' id='colTotal'>
                    ${total}
                </td>
            `;
            tbody.appendChild(totalCol);
        }

        function addCol(){
            let xi = document.getElementById('xi').value;
            let fa = document.getElementById('fa').value;
            fa = parseInt(fa);
            if(xi != ""){
                if(fa == ""){
                    document.getElementById('input-alert').style.display = 'block'
                } else {
                    
                    COLS.push([parseFloat(parseFloat(fa).toFixed(3)),xi])
                    COLS = COLS.sort(Comparator)
                    refreshTable()
                }
            } else {
                document.getElementById('input-alert').style.display = 'block'
            }
            document.getElementById('xi').value = '';
            document.getElementById('fa').value = '';
        }
    
        function hideAlert(){
            document.getElementById('input-alert').style.display = 'none'
        }
        
        function restart(){
            COLS = [];
            let tbody = document.getElementById('principal-table-body');
            tbody.innerHTML = '';
            document.getElementById('xi').value = '';
            document.getElementById('fa').value = '';
        }
