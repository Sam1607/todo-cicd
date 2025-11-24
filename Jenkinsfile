pipeline {
    agent any

    stages {
        stage('Install Deps') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t todo-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat '''
                docker stop todo-container || true
                docker rm todo-container || true
                docker run -d -p 8000:80 --name todo-container todo-app
                '''
            }
        }
    }
}
