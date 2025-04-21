pipeline {
    agent any

    environment {
        SONAR_HOST = 'http://localhost:9000'
        SONAR_TOKEN = credentials('SONAR_TOKEN')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    bat 'sonar-scanner.bat -Dsonar.projectKey=demo -Dsonar.sources=. -Dsonar.host.url=%SONAR_HOST% -Dsonar.login=%SONAR_TOKEN%'
                }
            }
        }

        stage('Esperar resultados') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }

    post {
        success {
            echo 'Análisis SAST finalizado correctamente.'
        }
        failure {
            echo 'Falló el análisis o la calidad del código no es aceptable.'
        }
    }
}


