let processes = [];

function addProcess() {
    let pid = document.getElementById("pid").value;
    let at = parseInt(document.getElementById("at").value);
    let bt = parseInt(document.getElementById("bt").value);
    let pr = parseInt(document.getElementById("pr").value) || 0;

    processes.push({
        pid, at, bt, pr,
        completed: false
    });

    let table = document.getElementById("ptable");
    let row = table.insertRow();
    row.innerHTML = `<td>${pid}</td><td>${at}</td><td>${bt}</td><td>${pr}</td>`;
}

function simulate() {
    let algo = document.getElementById("algo").value;

    // Reset
    let resultTable = document.getElementById("result");
    resultTable.innerHTML = "<tr><th>PID</th><th>WT</th><th>TAT</th></tr>";
    document.getElementById("gantt").innerHTML = "";
    document.getElementById("avg").innerHTML = "";

    let time = 0;
    let completed = 0;
    let n = processes.length;
    let totalWT = 0;

    processes.forEach(p => p.completed = false);

    while (completed < n) {

        let ready = processes.filter(p => p.at <= time && !p.completed);

        if (ready.length === 0) {
            time++;
            continue;
        }

        let current;

        if (algo === "fcfs") {
            ready.sort((a,b) => a.at - b.at);
            current = ready[0];
        }

        if (algo === "sjf") {
            ready.sort((a,b) => a.bt - b.bt);
            current = ready[0];
        }

        if (algo === "priority") {
            ready.sort((a,b) => a.pr - b.pr);
            current = ready[0];
        }

        let start = time;
        time += current.bt;
        let finish = time;

        let tat = finish - current.at;
        let wt = tat - current.bt;

        totalWT += wt;
        current.completed = true;
        completed++;

        // Result table
        let row = resultTable.insertRow();
        row.innerHTML = `<td>${current.pid}</td><td>${wt}</td><td>${tat}</td>`;

        // Gantt
        let block = document.createElement("div");
        block.className = "block";
        block.innerHTML = `${current.pid}<br>${start}-${finish}`;
        document.getElementById("gantt").appendChild(block);
    }

    document.getElementById("avg").innerHTML =
        "Average Waiting Time = " + (totalWT/n).toFixed(2);
}
