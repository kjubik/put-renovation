# PUT Renovation

Website for [`PUT Renovation`](https://renovation.put.poznan.pl/) student club.

## Setting up development

Clone the project repository from GitHub

```bash
git clone https://github.com/kjubik/put-renovation.git
```

Create a new directory `pocketbase` in the project root and run the following commands to download and extract the PocketBase server.

```bash
wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.19/pocketbase_0.22.19_linux_amd64.zip

unzip pocketbase_0.22.19_linux_amd64.zip

rm pocketbase_0.22.19_linux_amd64.zip

./pocketbase serve
```

Navigate to http://localhost:8090/_ to access the PocketBase admin page. Upon first visit, you will be prompted to create an admin user.
