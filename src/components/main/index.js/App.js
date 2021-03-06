//app.js

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import styles from './styles.js'




class PersistentDrawer extends React.Component {
    state = {
	open: false,
	anchor: 'left',
    };

    handleDrawerOpen = () => {
	this.setState({ open: true });
    };

    handleDrawerClose = () => {
	this.setState({ open: false });
    };


    render() {
	const { classes, theme } = this.props;
	const { anchor, open } = this.state;

	const drawer = (
		<Drawer
            type="persistent"
            classes={{
		paper: classes.drawerPaper,
            }}
            anchor={anchor}
            open={open}
		>
		<div className={classes.drawerInner}>
		<div className={classes.drawerHeader}>
		<IconButton onClick={this.handleDrawerClose}>
		{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
		</div>
		<Divider />

		<Divider />

            </div>
		</Drawer>
	);

	let before = null;
	let after = null;

	if (anchor === 'left') {
	    before = drawer;
	} else {
	    after = drawer;
	}
	return (
		<div className={classes.appFrame}>
		<AppBar
            className={classNames(classes.appBar, {
		[classes.appBarShift]: open,
		[classes[`appBarShift-${anchor}`]]: open,
            })}
		>
		<Toolbar disableGutters={!open}>
		<IconButton
            color="contrast"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
		>
                <MenuIcon />
		</IconButton>
		<Typography type="title" color="inherit" noWrap>
		Crypto Box
            </Typography>
		</Toolbar>
		</AppBar>
		{before}
		<main
            className={classNames(classes.content, classes[`content-${anchor}`], {
		[classes.contentShift]: open,
		[classes[`contentShift-${anchor}`]]: open,
            })}
		>
		<Typography>{'You think water moves fast? You should see ice.'}</Typography>
		</main>
		{after}
            </div>

	);
    }
}

PersistentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
