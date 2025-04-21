pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('SonarCloud Analysis') {
            environment {
                SONAR_TOKEN = credentials('SONAR_TOKEN') // Asegúrate de tener este token creado en Jenkins
            }
            steps {
                withSonarQubeEnv('SonarLocal') {
                    bat """
                    sonar-scanner.bat ^
                      -Dsonar.projectKey=YunierLR_Mi-tesis ^
                      -Dsonar.organization=yunierlr ^
                      -Dsonar.sources=. ^
                      -Dsonar.host.url=https://sonarcloud.io ^
                      -Dsonar.login=%SONAR_TOKEN%
                    """
                }
            }
        }
    }
}


