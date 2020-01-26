FROM node:latest

ARG USER_UID=1000
ARG USER_GID=$USER_UID
ARG USERNAME=node

# [Optional] Update UID/GID if needed
RUN if [ "$USER_GID" != "1000" ] || [ "$USER_UID" != "1000" ]; then \
        groupmod --gid $USER_GID $USERNAME \
        && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
        && chown -R $USER_UID:$USER_GID /home/$USERNAME; \
    fi

RUN apt install -y git

WORKDIR /home/node

RUN mkdir udemy-react-redux-crud-application
WORKDIR udemy-react-redux-crud-application

RUN npm install yarn
RUN yarn global add create-react-app
