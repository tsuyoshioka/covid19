Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.network "forwarded_port", guest: 3000, host: 3333, host_ip: "127.0.0.1"
  config.vm.provider "virtualbox" do |vb|
    # Customize the amount of memory on the VM:
    vb.memory = "4096"
  config.vm.synced_folder ".", "/home/vagrant/covid19"
  end
  config.vm.provision "shell", path: "vagrant_provision.sh", privileged: false
end
