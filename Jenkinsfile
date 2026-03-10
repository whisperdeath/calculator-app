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

    post {
        failure {
            echo 'Le build a échoué.'
        }
        success {
            echo 'Build réussi.'
        }
    }
}