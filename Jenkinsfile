pipeline {
    agent any

    environment {
        SONAR_HOST = 'https://sonarcloud.io/account/security' // Cambiar si es remoto
        SONAR_TOKEN = credentials('sonar-token') // ID de credencial en Jenkins
    }

    stages {

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    sh 'sonar-scanner -Dsonar.projectKey=demo -Dsonar.sources=. -Dsonar.host.url=$SONAR_HOST -Dsonar.login=$SONAR_TOKEN'
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

