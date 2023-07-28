@echo_off
cd shell
call npm install 
cd ../increment
call npm install
cd ../decrement
call npm install
start run.bat
cd ../increment
start run.bat
cd ../shell
start run.bat