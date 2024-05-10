"use client";
import React, { useState } from "react";

import { FloatButton } from "antd";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";

interface FullScreen {
	fullScreen: boolean;
	setFullScreen: () => void;
}

class FullScreenDemo extends React.Component<{}, FullScreen> {
	constructor(props: {}) {
		super(props);
		this.state = {
			fullScreen: false,
			setFullScreen: this.toogleFullScreen,
		};
	}

	toogleFullScreen = () => {
		this.setState((prevState) => ({
			fullScreen: !prevState.fullScreen,
		}));
	};

	openFullscreen = () => {
		const elem = document.documentElement as HTMLElement;
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
			this.toogleFullScreen();
		}
	};

	closeFullscreen = () => {
		if (document.exitFullscreen) {
			document.exitFullscreen();
			this.toogleFullScreen();
		}
	};

	render() {
		const { fullScreen } = this.state;

		return (
			<>
				{fullScreen ? (
					<FloatButton
						shape="circle"
						type="primary"
						style={{ right: 5, bottom: 5 }}
						icon={<FullscreenExitOutlined />}
						onClick={this.closeFullscreen}
					></FloatButton>
				) : (
					<FloatButton
						shape="circle"
						type="primary"
						style={{ right: 5, bottom: 5 }}
						icon={<FullscreenOutlined />}
						onClick={this.openFullscreen}
					></FloatButton>
				)}
			</>
		);
	}
}
export default FullScreenDemo;
