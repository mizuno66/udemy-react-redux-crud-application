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

WORKDIR /home/node

RUN mkdir udemy-react-redux-crud-application
RUN mkdir udemy-react-redux-crud-application/app/
WORKDIR udemy-react-redux-crud-application/app/

ENV NODE_ENV development

COPY app/package.json .
COPY app/yarn.lock .

RUN yarn install
