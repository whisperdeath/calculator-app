pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
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

  