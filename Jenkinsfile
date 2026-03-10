pipeline {
    agent any

    tools {
        NodeJS 'node' 
    }

    stages {
        stage('Installation') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') { // Nouveau stage ajouté
            steps {
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
            }
        }
    }
}
