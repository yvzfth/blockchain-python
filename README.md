**Clone the repo**

```Bash
git clone https://github.com/yvzfth/blockchain-python.git
```

Navigate to `blockchain-python` directory

```Bash
cd blockchain-python
```

**Install the virtual environment**

```bash
python3 -m pip install --user virtualenv
```

**Create your virtual environment**

**-On MacOS**

```Bash
python3 -m venv venv
```

**-On Windows**

```Bash
virtualenv venv
```

**Activate the virtual environment**

**-On MacOS**

```bash
source venv/bin/activate
```

**-On Windows**

```Bash
venv\Scripts\activate
```

**Install all packages**

```Bash
pip install -r requirements.txt
```

## Run the tests

Make sure to activate the virtual environment

```Bash
python -m pytest backend/tests
```

**Run the application and API**

Make sure to activate the virtual environment

```Bash
python -m backend.app
```

**Run a peer instance**

Make sure to activate the virtual environment

```Bash
export PEER=True && python -m backend.app
```

**Run the frontend**

```Bash
cd frontend

npm run start
```

**Seed the backend with data**

Make sure to activate the virtual environment

```Bash
export SEED_DATA=True && python -m backend.app
```

**Deactivate the Environment**

To return to normal system settings, use the `deactivate` command.

```Bash
deactivate
```
