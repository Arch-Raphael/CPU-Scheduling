# CPU Scheduling Simulator (Web-Based)

A simple web-based simulator to visualize and analyze different CPU Scheduling Algorithms.

## Project Description

This project provides a user-friendly interface to simulate CPU scheduling techniques. Users can enter process details, choose a scheduling algorithm, and visualize execution using a Gantt chart along with performance metrics.

## Features

- Add Process ID, Arrival Time, Burst Time, and Priority
- Select Scheduling Algorithm:
  - FCFS (First Come First Serve)
  - SJF (Shortest Job First - Non Preemptive)
  - Priority Scheduling (Non Preemptive)
- Simulate CPU execution
- Display:
  - Waiting Time (WT)
  - Turnaround Time (TAT)
  - Average Waiting Time
- Gantt Chart Visualization

## Technologies Used

- HTML
- CSS
- JavaScript
- Web Browser

## How to Run

1. Download or clone the repository:
   ```bash
   git clone https://github.com/Arch-Raphael/CPU-Scheduling.git

## Comment on how process priority affects execution:
<p>
In Priority Scheduling, the CPU is allocated to the process with the highest priority (lowest priority value). High priority processes are executed earlier, resulting in lower waiting and turnaround times for them. However, low priority processes may experience longer waiting times and can even suffer from starvation if higher priority processes continue to arrive. This scheduling method is useful for handling critical or important tasks but may reduce fairness in CPU allocation.
</p>
