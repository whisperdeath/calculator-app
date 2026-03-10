pipeline {
    agent any

    tools {
        nodejs 'node' 
    }

    stages {
        stage('Installation') {
            steps {
                bat 'npm install'
      
        }
        stage('Build') {
            steps {
                echo 'Application is ready...'
            }
        }
    }
}
